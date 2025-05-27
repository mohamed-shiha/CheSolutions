"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  employees: string
  currentSystems: string
  message: string
  newsletter: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    currentSystems: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // For GitHub Pages deployment, we'll use a mailto fallback
      // In a real deployment, you'd replace this with your actual form handler
      const subject = `New Contact Form Submission from ${formData.name}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Number of Employees: ${formData.employees}
Current Systems: ${formData.currentSystems}
Newsletter Subscription: ${formData.newsletter ? "Yes" : "No"}

Message:
${formData.message}
      `.trim()

      // Create mailto link
      const mailtoLink = `mailto:info@chesolutions.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Try to submit to a form handler first (if available)
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          toast({
            title: "Message sent successfully!",
            description: "We'll get back to you within 24 hours.",
          })
          // Reset form
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            employees: "",
            currentSystems: "",
            message: "",
            newsletter: false,
          })
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        // Fallback to mailto
        window.location.href = mailtoLink
        toast({
          title: "Opening email client...",
          description: "Please send the email to complete your inquiry.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Request a Consultation</CardTitle>
        <CardDescription className="text-gray-300">
          Tell us about your factory and we'll create a custom paperless solution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="John Smith"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="john@company.ie"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Company Name *
              </Label>
              <Input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="Your Manufacturing Company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="+353 1 234 5678"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employees" className="text-white">
                Number of Employees
              </Label>
              <Select value={formData.employees} onValueChange={(value) => handleInputChange("employees", value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSystems" className="text-white">
                Current Systems
              </Label>
              <Select
                value={formData.currentSystems}
                onValueChange={(value) => handleInputChange("currentSystems", value)}
              >
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Select current setup" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mostly-paper">Mostly paper-based</SelectItem>
                  <SelectItem value="some-digital">Some digital systems</SelectItem>
                  <SelectItem value="mixed">Mixed paper and digital</SelectItem>
                  <SelectItem value="legacy-digital">Legacy digital systems</SelectItem>
                  <SelectItem value="modern-partial">Modern but incomplete</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Tell us about your needs *
            </Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
              placeholder="Describe your current challenges, what you'd like to achieve, and any specific requirements..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              className="border-gray-600 data-[state=checked]:bg-blue-600"
            />
            <Label htmlFor="newsletter" className="text-sm text-gray-300">
              Subscribe to our newsletter for industry insights and updates
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
