import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, TrendingUp, Users, MessageCircle, Calendar, Award, Zap } from "lucide-react";
import coffeeIcon from "@/assets/coffee-shop-icon.jpg";
import retailIcon from "@/assets/retail-icon.jpg";
import officeIcon from "@/assets/office-icon.jpg";

export default function ReviewScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for all jobs
  const jobsData = {
    "coffee-central": {
      id: "coffee-central",
      title: "Barista Assistant",
      company: "Central Café",
      location: "Mitte, Berlin",
      hourlyRate: 12.5,
      totalShifts: 5,
      totalEarnings: 400,
      fitScore: 92,
      icon: coffeeIcon,
      shifts: [
        { date: "Mon, Dec 16", time: "7:00-11:00 AM", day: "Tomorrow" },
        { date: "Tue, Dec 17", time: "7:00-11:00 AM", day: "Tuesday" },
        { date: "Wed, Dec 18", time: "7:00-11:00 AM", day: "Wednesday" },
        { date: "Thu, Dec 19", time: "7:00-11:00 AM", day: "Thursday" },
        { date: "Fri, Dec 20", time: "7:00-11:00 AM", day: "Friday" }
      ],
      manager: "Anna S.",
      rating: 4.8,
      reviews: 127,
      commuteTime: "12 min",
      benefits: ["Flexible cancellation", "Same manager", "Morning shifts", "Free coffee"],
      description: "Join our friendly café team for the morning rush! Perfect for students with early availability."
    },
    "retail-fashion": {
      id: "retail-fashion",
      title: "Sales Associate",
      company: "Urban Style",
      location: "Prenzlauer Berg, Berlin",
      hourlyRate: 13.0,
      totalShifts: 4,
      totalEarnings: 364,
      fitScore: 88,
      icon: retailIcon,
      shifts: [
        { date: "Sat, Dec 14", time: "10:00-19:00 PM", day: "This Saturday" },
        { date: "Sun, Dec 15", time: "10:00-19:00 PM", day: "Sunday" },
        { date: "Sat, Dec 21", time: "10:00-19:00 PM", day: "Next Saturday" },
        { date: "Sun, Dec 22", time: "10:00-19:00 PM", day: "Next Sunday" }
      ],
      manager: "Marcus L.",
      rating: 4.7,
      reviews: 89,
      commuteTime: "18 min",
      benefits: ["Employee discount", "Flexible schedule", "Weekend premium", "Team events"],
      description: "Help customers find their perfect style in our trendy fashion store. Great for building sales skills!"
    },
    "office-admin": {
      id: "office-admin",
      title: "Administrative Support",
      company: "TechStart GmbH",
      location: "Kreuzberg, Berlin",
      hourlyRate: 14.0,
      totalShifts: 3,
      totalEarnings: 336,
      fitScore: 85,
      icon: officeIcon,
      shifts: [
        { date: "Wed, Dec 18", time: "14:00-22:00 PM", day: "Wednesday" },
        { date: "Thu, Dec 19", time: "14:00-22:00 PM", day: "Thursday" },
        { date: "Fri, Dec 20", time: "14:00-22:00 PM", day: "Friday" }
      ],
      manager: "Sarah K.",
      rating: 4.9,
      reviews: 156,
      commuteTime: "15 min",
      benefits: ["Tech environment", "Career development", "Quiet workspace", "Modern office"],
      description: "Support our growing startup with administrative tasks. Perfect for gaining experience in tech!"
    }
  };

  const job = jobsData[id as keyof typeof jobsData] || jobsData["coffee-central"];

  return (
    <div className="mobile-container bg-background">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/discovery')} className="touch-target">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img src={job.icon} alt={job.company} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg font-semibold truncate">{job.title}</h1>
                <p className="text-muted-foreground text-sm truncate">{job.company}</p>
              </div>
            </div>
            <div className="ai-badge px-2 py-1 rounded-lg flex-shrink-0">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                <span className="font-semibold text-xs">{job.fitScore}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 pb-20">
        {/* Adaptive Job Card */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Highlighted for You</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-success-light p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-success" />
                <span className="font-medium text-success text-sm">Commute</span>
              </div>
              <p className="text-lg font-bold text-success">{job.commuteTime}</p>
              <p className="text-xs text-success">by U-Bahn</p>
            </div>
            
            <div className="bg-primary/10 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary text-sm">Schedule</span>
              </div>
              <p className="text-lg font-bold text-primary">Morning</p>
              <p className="text-xs text-primary">Matches your preference</p>
            </div>
          </div>

          <div className="bg-warning-light p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-warning-foreground" />
              <span className="font-medium text-warning-foreground text-sm">Total Earnings</span>
            </div>
            <p className="text-xl font-bold text-warning-foreground">€{job.totalEarnings}</p>
            <p className="text-sm text-warning-foreground">€{job.hourlyRate}/hour × {job.totalShifts} shifts</p>
          </div>
        </Card>

        {/* Comparison Strip */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4">Multi-shift vs Single-shift Benefits</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-success mb-2 text-sm">✓ Multi-shift Package</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• No repeated training</li>
                <li>• Same manager (Anna S.)</li>
                <li>• Higher total earnings</li>
                <li>• XP bonus: +200 points</li>
                <li>• Streak bonus eligible</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-muted-foreground mb-2 text-sm">Single-shift Only</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• New training each time</li>
                <li>• Different managers</li>
                <li>• Lower hourly potential</li>
                <li>• No XP bonus</li>
                <li>• No streak rewards</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* XP Points System */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-gamification" />
            XP Progress
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Current Level</span>
                <span className="font-medium">Level 7</span>
              </div>
              <Progress value={62} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">1,240 / 2,000 XP</p>
            </div>
            
            <Separator />
            
            <div className="bg-gamification-light p-3 rounded-lg">
              <p className="font-medium text-gamification-foreground mb-1 text-sm">This job adds:</p>
              <p className="text-xl font-bold text-gamification">+200 XP</p>
              <p className="text-xs text-gamification-foreground">Boost your profile ranking!</p>
            </div>
          </div>
        </Card>

        {/* Visual Journey Map */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Your 5-Day Journey
          </h3>
          <div className="space-y-3">
            {job.shifts.map((shift, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{shift.date}</div>
                  <div className="text-xs text-muted-foreground">{shift.time}</div>
                </div>
                <div className="text-xs font-medium text-primary flex-shrink-0">{shift.day}</div>
                {index === 0 && <Badge className="streak-badge text-xs flex-shrink-0">Start</Badge>}
                {index === job.shifts.length - 1 && <Badge variant="outline" className="text-xs flex-shrink-0">€10 Bonus</Badge>}
              </div>
            ))}
          </div>
        </Card>

        {/* AI Smart Q&A */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            AI Assistant
          </h3>
          <div className="space-y-3">
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Will I have the same manager?</p>
              <p className="text-xs text-muted-foreground">Yes, Anna S. for all 5 days. She's rated 4.8⭐ by students.</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">What if I'm running late?</p>
              <p className="text-xs text-muted-foreground">Call the café directly. Most students arrive 5-10 min early.</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Dress code?</p>
              <p className="text-xs text-muted-foreground">Casual black clothing. Apron provided by café.</p>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4">What's included</h3>
          <div className="space-y-2">
            {job.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0"></div>
                {benefit}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Sticky bottom button */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-background p-4 border-t">
        <Button 
          className="w-full touch-target" 
          size="lg"
          onClick={() => navigate(`/commitment/${id}`)}
        >
          Book All 5 Shifts
        </Button>
      </div>
    </div>
  );
}