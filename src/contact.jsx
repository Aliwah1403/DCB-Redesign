import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Chat to our friendly team and get set up and
            ready to go in just 5 minutes.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="US" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">US</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="ca">CA</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="flex-1 ml-2"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Services</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Financial Planning",
                  "Investment Management",
                  "Risk Assessment",
                  "Corporate Finance",
                  "Fundraising",
                  "Other",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox id={service.toLowerCase().replace(" ", "-")} />
                    <Label htmlFor={service.toLowerCase().replace(" ", "-")}>
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or inquiry..."
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        </div>

        <div className="hidden md:block">
          {/* Map placeholder */}
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Map goes here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
