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
    <div className="min-h-screen bg-background">
      {/* Celebration Banner */}
      <div className="bg-success text-success-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className={`text-center transition-all duration-1000 ${animationStage >= 1 ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <CheckCircle className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
              <CheckCircle className="w-8 h-8" />
            </div>
            <p className="text-success-foreground/90">
              You booked 5 shifts in a row — consistency pays off! 🎉
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img src={job.icon} alt={job.company} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-success font-medium mt-1">
                    Total Earnings: €{job.totalEarnings}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">Duration</span>
                  </div>
                  <p className="text-lg font-semibold">5 Days</p>
                  <p className="text-xs text-muted-foreground">Dec 16-20, 2024</p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">Schedule</span>
                  </div>
                  <p className="text-lg font-semibold">7-11 AM</p>
                  <p className="text-xs text-muted-foreground">Morning shifts</p>
                </div>
              </div>
            </Card>

            {/* Progress Tracker */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Your Progress Tracker
              </h3>
              
              <div className="space-y-4">
                {job.shifts.map((shift, index) => (
                  <div key={index} 
                       className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                         animationStage >= 2 ? 'animate-slide-up' : 'opacity-50'
                       } ${index === 0 ? 'bg-primary/10 border-2 border-primary/20' : 'bg-muted/50'}`}
                       style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      index === 0 ? 'bg-primary text-primary-foreground animate-pulse-glow' : 'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{shift.date}</div>
                      <div className="text-sm text-muted-foreground">{shift.time}</div>
                    </div>
                    <div className="text-right">
                      {index === 0 ? (
                        <Badge className="streak-badge">Next Shift</Badge>
                      ) : (
                        <span className="text-sm text-muted-foreground">Upcoming</span>
                      )}
                    </div>
                    {index === job.shifts.length - 1 && (
                      <Gift className="w-5 h-5 text-gamification" />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Personalized Prep Kit */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Book className="w-5 h-5 text-primary" />
                Your Prep Kit for Central Café
              </h3>
              
              <div className="space-y-3">
                {job.prepTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-warning-light rounded-lg">
                <h4 className="font-medium mb-2 text-warning-foreground">Important Contact Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-warning" />
                    <span>{job.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-warning" />
                    <span>{job.phone} (Ask for {job.manager})</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* End-of-series Reward */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-gamification" />
                Completion Rewards
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gamification-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gamification mb-1">€10</div>
                  <div className="text-sm text-gamification-foreground">Completion Bonus</div>
                  <div className="text-xs text-gamification-foreground mt-1">Unlocks after final shift</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary">+200</div>
                    <div className="text-xs text-muted-foreground">XP Points</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-success">Level ↑</div>
                    <div className="text-xs text-muted-foreground">Profile Boost</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievement Progress */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Achievement Progress
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Multi-shift Master</span>
                    <span className="font-medium">1/5</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Complete 5 multi-shift jobs</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Morning Champion</span>
                    <span className="font-medium">5/10</span>
                  </div>
                  <Progress value={50} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Work 10 morning shifts</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full" variant="outline">
                Add to Calendar
              </Button>
              <Button className="w-full" variant="outline">
                Share with Friends
              </Button>
              <Button 
                className="w-full btn-primary" 
                onClick={() => navigate('/discovery')}
              >
                Find More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}