import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Clock, Zap, Trophy, Users, Brain } from "lucide-react";
import heroImage from "@/assets/hero-jobs.jpg";
import coffeeIcon from "@/assets/coffee-shop-icon.jpg";
import retailIcon from "@/assets/retail-icon.jpg";
import officeIcon from "@/assets/office-icon.jpg";

interface JobCard {
  id: string;
  title: string;
  company: string;
  location: string;
  hourlyRate: number;
  totalShifts: number;
  totalEarnings: number;
  fitScore: number;
  whyThisJob: string;
  icon: string;
  streakBadge: string;
  timeCommitment: string;
  nextShiftDate: string;
}

const jobs: JobCard[] = [
  {
    id: "coffee-central",
    title: "Barista Assistant",
    company: "Central Café",
    location: "Mitte, Berlin",
    hourlyRate: 12.5,
    totalShifts: 5,
    totalEarnings: 400,
    fitScore: 92,
    whyThisJob: "Perfect for your morning availability and coffee experience!",
    icon: coffeeIcon,
    streakBadge: "Multi-shift streak",
    timeCommitment: "Mon-Fri, 7-11 AM",
    nextShiftDate: "Tomorrow"
  },
  {
    id: "retail-fashion",
    title: "Sales Associate",
    company: "Urban Style",
    location: "Prenzlauer Berg, Berlin",
    hourlyRate: 13.0,
    totalShifts: 4,
    totalEarnings: 364,
    fitScore: 88,
    whyThisJob: "Matches your retail experience and fashion interest!",
    icon: retailIcon,
    streakBadge: "Weekend boost",
    timeCommitment: "Sat-Sun, 10-19 PM",
    nextShiftDate: "This Saturday"
  },
  {
    id: "office-admin",
    title: "Administrative Support",
    company: "TechStart GmbH",
    location: "Kreuzberg, Berlin",
    hourlyRate: 14.0,
    totalShifts: 3,
    totalEarnings: 336,
    fitScore: 85,
    whyThisJob: "Great fit for your organizational skills and tech interest!",
    icon: officeIcon,
    streakBadge: "Career builder",
    timeCommitment: "Wed-Fri, 14-22 PM",
    nextShiftDate: "Wednesday"
  }
];

export default function DiscoveryScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Multi-Shift Jobs</h1>
              <p className="text-primary-glow">AI-powered recommendations just for you</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm opacity-90">Your XP Level</div>
                <div className="font-semibold">Level 7 • 1,240 XP</div>
              </div>
              <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Challenge Banner */}
      <div className="bg-gamification text-gamification-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5" />
            <div className="flex-1">
              <span className="font-semibold">Weekly Challenge: </span>
              Complete 3 shifts at the same client this week and get a €10 bonus!
            </div>
            <Progress value={33} className="w-24 bg-gamification-light" />
            <span className="text-sm font-medium">1/3</span>
          </div>
        </div>
      </div>

      {/* Job Feed */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">AI Recommendations</h2>
          </div>
          <p className="text-muted-foreground">Personalized multi-shift opportunities based on your profile</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="job-card p-6 cursor-pointer animate-slide-up"
                  onClick={() => navigate(`/job/${job.id}`)}>
              {/* Header with company icon and fit score */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={job.icon} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <div className="ai-badge px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{job.fitScore}%</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <Badge className="streak-badge">{job.streakBadge}</Badge>
                <Badge variant="outline" className="text-xs">
                  <Users className="w-3 h-3 mr-1" />
                  {job.totalShifts} shifts
                </Badge>
              </div>

              {/* AI Micro-pitch */}
              <div className="bg-accent p-3 rounded-lg mb-4">
                <p className="text-sm text-accent-foreground font-medium">
                  💡 {job.whyThisJob}
                </p>
              </div>

              {/* Location and timing */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {job.timeCommitment}
                </div>
              </div>

              {/* Earnings preview */}
              <div className="bg-success-light p-3 rounded-lg mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-success">Total Earnings</span>
                  <span className="earnings-preview">€{job.totalEarnings}</span>
                </div>
                <div className="text-xs text-success mt-1">
                  €{job.hourlyRate}/hour × {job.totalShifts} shifts
                </div>
              </div>

              {/* Earnings Streak Preview */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Earnings Streak</span>
                  <span className="font-medium">Day {job.totalShifts}/7</span>
                </div>
                <Progress value={(job.totalShifts / 7) * 100} className="h-2" />
              </div>

              <Button className="w-full btn-primary" size="sm">
                View Details • Starts {job.nextShiftDate}
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Show More Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
}