import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, CheckCircle, Gift, Book, Award, TrendingUp, Clock, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import coffeeIcon from "@/assets/coffee-shop-icon.jpg";
import retailIcon from "@/assets/retail-icon.jpg";
import officeIcon from "@/assets/office-icon.jpg";

export default function ConfirmationScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Trigger celebration animation stages
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const jobsData = {
    "coffee-central": {
      title: "Barista Assistant",
      company: "Central Café",
      totalShifts: 5,
      totalEarnings: 400,
      icon: coffeeIcon,
      manager: "Anna S.",
      address: "Friedrichstraße 123, 10117 Berlin",
      phone: "+49 30 12345678",
      shifts: [
        { date: "Mon, Dec 16", time: "7:00-11:00 AM", status: "next" },
        { date: "Tue, Dec 17", time: "7:00-11:00 AM", status: "upcoming" },
        { date: "Wed, Dec 18", time: "7:00-11:00 AM", status: "upcoming" },
        { date: "Thu, Dec 19", time: "7:00-11:00 AM", status: "upcoming" },
        { date: "Fri, Dec 20", time: "7:00-11:00 AM", status: "upcoming" }
      ]
    },
    "retail-fashion": {
      title: "Sales Associate",
      company: "Urban Style",
      totalShifts: 4,
      totalEarnings: 364,
      icon: retailIcon,
      manager: "Marcus L.",
      address: "Kastanienallee 45, 10435 Berlin",
      phone: "+49 30 87654321",
      shifts: [
        { date: "Sat, Dec 14", time: "10:00-19:00 PM", status: "next" },
        { date: "Sun, Dec 15", time: "10:00-19:00 PM", status: "upcoming" },
        { date: "Sat, Dec 21", time: "10:00-19:00 PM", status: "upcoming" },
        { date: "Sun, Dec 22", time: "10:00-19:00 PM", status: "upcoming" }
      ]
    },
    "office-admin": {
      title: "Administrative Support",
      company: "TechStart GmbH",
      totalShifts: 3,
      totalEarnings: 336,
      icon: officeIcon,
      manager: "Sarah K.",
      address: "Oranienstraße 67, 10969 Berlin",
      phone: "+49 30 11223344",
      shifts: [
        { date: "Wed, Dec 18", time: "14:00-22:00 PM", status: "next" },
        { date: "Thu, Dec 19", time: "14:00-22:00 PM", status: "upcoming" },
        { date: "Fri, Dec 20", time: "14:00-22:00 PM", status: "upcoming" }
      ]
    }
  };

  const job = jobsData[id as keyof typeof jobsData] || jobsData["coffee-central"];

  // Add prep tips for each job
  const prepTips = {
    "coffee-central": [
      "Arrive 10 minutes early for your first day",
      "Wear comfortable black clothing",
      "Bring a water bottle - it gets busy!",
      "Ask Anna about the morning rush procedures"
    ],
    "retail-fashion": [
      "Dress stylishly to represent the brand",
      "Familiarize yourself with current fashion trends",
      "Practice your customer service skills",
      "Ask Marcus about store policies and procedures"
    ],
    "office-admin": [
      "Bring a notebook for taking notes",
      "Dress business casual",
      "Be ready to use Microsoft Office",
      "Ask Sarah about project priorities on day one"
    ]
  };

  const currentJobPrepTips = prepTips[id as keyof typeof prepTips] || prepTips["coffee-central"];

  return (
    <div className="mobile-container bg-background">
      {/* Celebration Banner */}
      <div className="bg-success text-success-foreground">
        <div className="px-4 py-6">
          <div className={`text-center transition-all duration-1000 ${animationStage >= 1 ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6" aria-hidden="true" />
              <h1 className="text-xl font-bold">Application Submitted</h1>
            </div>
            <p className="text-success-foreground/90 text-sm">
              The employer must validate your application and it's not done yet.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 pb-24">
        <div className="space-y-6">
          {/* Booking Summary */}
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={job.icon} alt={`${job.company} logo`} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
              <div className="min-w-0">
                <h2 className="text-lg font-semibold leading-tight">{job.title}</h2>
                <p className="text-muted-foreground text-sm">{job.company}</p>
                <p className="text-sm text-success font-medium">
                  Total: €{job.totalEarnings}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="font-medium text-sm">Duration</span>
                </div>
                <p className="text-base font-semibold">5 Days</p>
                <p className="text-xs text-muted-foreground">Dec 16-20</p>
              </div>
              
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="font-medium text-sm">Schedule</span>
                </div>
                <p className="text-base font-semibold">7-11 AM</p>
                <p className="text-xs text-muted-foreground">Morning shifts</p>
              </div>
            </div>
          </Card>

          {/* Application Status */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
              <Clock className="w-5 h-5 text-warning" aria-hidden="true" />
              Application Pending
            </h3>
            <div className="bg-warning-light p-3 rounded-lg mb-4">
              <p className="text-sm text-warning-foreground font-medium mb-1">
                Average review time: 2-4 hours
              </p>
              <p className="text-xs text-warning-foreground">
                {job.company} typically responds quickly. You'll get a notification once they review your application.
              </p>
            </div>
          </Card>

          {/* Progress Tracker */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
              <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />
              Your Applied Shifts
            </h3>
            
            <div className="space-y-3">
              {job.shifts.map((shift, index) => (
                <div key={index} 
                     className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                       animationStage >= 2 ? 'animate-slide-up' : 'opacity-50'
                     } ${index === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'}`}
                     style={{ animationDelay: `${index * 100}ms` }}
                     role="listitem">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index === 0 ? 'bg-primary text-primary-foreground animate-pulse-glow' : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{shift.date}</div>
                    <div className="text-xs text-muted-foreground">{shift.time}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {index === 0 ? (
                      <Badge className="text-xs bg-primary text-primary-foreground">Next</Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">Upcoming</span>
                    )}
                  </div>
                  {index === job.shifts.length - 1 && (
                    <Gift className="w-4 h-4 text-gamification" aria-label="Completion bonus" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Prep Kit & Contact */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
              <Book className="w-5 h-5 text-primary" aria-hidden="true" />
              Your Prep Kit
            </h3>
            
            <div className="space-y-3 mb-4">
              {currentJobPrepTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{tip}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-warning-light rounded-lg">
              <h4 className="font-medium mb-2 text-warning-foreground text-sm">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs">{job.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-warning flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs">{job.phone}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Rewards & Progress */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
              <Gift className="w-5 h-5 text-gamification" aria-hidden="true" />
              Completion Rewards
            </h3>
            
            <div className="bg-gamification-light p-4 rounded-lg text-center mb-4">
              <div className="text-xl font-bold text-gamification">€10</div>
              <div className="text-sm text-gamification-foreground">Completion Bonus</div>
              <div className="text-xs text-gamification-foreground mt-1">Unlocks after final shift</div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-muted p-3 rounded-lg text-center">
                <div className="text-base font-bold text-primary">+200</div>
                <div className="text-xs text-muted-foreground">XP Points</div>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <div className="text-base font-bold text-success">Level ↑</div>
                <div className="text-xs text-muted-foreground">Profile Boost</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Multi-shift Master</span>
                  <span className="font-medium">1/5</span>
                </div>
                <Progress value={20} className="h-2" aria-label="Multi-shift Master progress: 1 of 5 completed" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Sticky bottom buttons */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-background p-4 border-t">
        <Button 
          className="w-full touch-target rounded-full" 
          onClick={() => navigate('/discovery')}
        >
          Find More Jobs
        </Button>
      </div>
    </div>
  );
}