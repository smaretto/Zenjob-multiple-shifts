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
    <div className="mobile-container bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Multi-Shift Jobs</h1>
              <p className="text-sm text-primary-glow">AI-powered recommendations</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs opacity-90">Level 7</div>
                <div className="text-sm font-semibold">1,240 XP</div>
              </div>
              <div className="w-10 h-10 bg-primary-glow rounded-full flex items-center justify-center touch-target">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Challenge Banner */}
      <div className="bg-gamification text-gamification-foreground">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 flex-shrink-0" aria-label="Challenge icon" />
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <span className="font-semibold">Weekly Challenge: </span>
                Complete 3 shifts for €10 bonus!
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Progress value={33} className="w-16 h-2" aria-label="Challenge progress: 1 of 3 completed" />
              <span className="text-sm font-medium">1/3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Feed */}
      <div className="px-4 py-6 pb-20">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-primary" aria-label="AI recommendations" />
            <h2 className="text-lg font-semibold">AI Recommendations</h2>
          </div>
          <p className="text-muted-foreground text-sm">Personalized multi-shift opportunities</p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="job-card p-4 cursor-pointer animate-slide-up touch-target"
                  onClick={() => navigate(`/job/${job.id}`)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${job.title} at ${job.company}`}>
              {/* Header with company icon and fit score */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img src={job.icon} alt={`${job.company} logo`} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base leading-tight">{job.title}</h3>
                    <p className="text-muted-foreground text-sm truncate">{job.company}</p>
                  </div>
                </div>
                <div className="ai-badge px-2 py-1 rounded-lg flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                    <span className="font-semibold text-xs">{job.fitScore}%</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-3 flex-wrap">
                <Badge className="streak-badge text-xs">{job.streakBadge}</Badge>
                <Badge variant="outline" className="text-xs">
                  <Users className="w-3 h-3 mr-1" aria-hidden="true" />
                  {job.totalShifts} shifts
                </Badge>
              </div>

              {/* AI Micro-pitch */}
              <div className="bg-accent p-3 rounded-lg mb-3">
                <p className="text-sm text-accent-foreground font-medium">
                  💡 {job.whyThisJob}
                </p>
              </div>

              {/* Location and timing */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{job.timeCommitment}</span>
                </div>
              </div>

              {/* Earnings preview */}
              <div className="bg-success-light p-3 rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-success">Total Earnings</span>
                  <span className="text-success font-bold text-sm">€{job.totalEarnings}</span>
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
                <Progress value={(job.totalShifts / 7) * 100} className="h-2" 
                         aria-label={`Earnings streak progress: ${job.totalShifts} out of 7 days`} />
              </div>

              <Button className="w-full" size="default" variant="default">
                View Details • Starts {job.nextShiftDate}
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline" size="lg" className="touch-target">
            Show More Recommendations
          </Button>
        </div>
      </div>

      {/* Mobile sticky bottom space */}
      <div className="h-20 bg-background"></div>
    </div>
  );
}