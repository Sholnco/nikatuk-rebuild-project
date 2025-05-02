
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Support</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our products or need help with an order? Our customer support 
              team is here to help. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                  <p className="text-sm text-gray-500">Monday to Friday, 9am to 5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">support@nikatuk.com</p>
                  <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Store Location</h3>
                  <p className="text-gray-600">123 Commerce Street, San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Store Hours</h3>
                  <p className="text-gray-600">Monday to Friday: 10am - 7pm</p>
                  <p className="text-gray-600">Saturday: 10am - 6pm</p>
                  <p className="text-gray-600">Sunday: 12pm - 5pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="">Select a subject</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns or Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Subscribe to our newsletter for exclusive offers and updates
                  </label>
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
