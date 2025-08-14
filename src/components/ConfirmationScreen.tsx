import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, CheckCircle, Gift, Book, Award, TrendingUp, Clock, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import coffeeIcon from "@/assets/coffee-shop-icon.jpg";

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

  const job = {
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
    ],
    prepTips: [
      "Arrive 10 minutes early for your first day",
      "Wear comfortable black clothing",
      "Bring a water bottle - it gets busy!",
      "Ask Anna about the morning rush procedures"
    ]
  };

  return (
    <div className="mobile-container bg-background">
      {/* Celebration Banner */}
      <div className="bg-success text-success-foreground">
        <div className="px-4 py-6">
          <div className={`text-center transition-all duration-1000 ${animationStage >= 1 ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6" aria-hidden="true" />
              <h1 className="text-xl font-bold">Booking Confirmed!</h1>
            </div>
            <p className="text-success-foreground/90 text-sm">
              You booked 5 shifts in a row — consistency pays off! 🎉
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

          {/* Progress Tracker */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-base">
              <TrendingUp className="w-5 h-5 text-primary" aria-hidden="true" />
              Your Progress Tracker
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
              {job.prepTips.map((tip, index) => (
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

          {/* Fixed bottom actions */}
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
            <div className="mobile-container">
              <div className="flex gap-3">
                <Button className="flex-1 touch-target" variant="outline">
                  Add to Calendar
                </Button>
                <Button 
                  className="flex-1" 
                  onClick={() => navigate('/discovery')}
                >
                  Find More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}