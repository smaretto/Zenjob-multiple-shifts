import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Clock, Zap, Trophy, Users, Brain, Filter } from "lucide-react";
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
  isActive?: boolean;
  completedShifts?: number;
}

const jobs: JobCard[] = [
  {
    id: "bookstore-active",
    title: "Book Store Assistant",
    company: "Pages & Coffee",
    location: "Friedrichshain, Berlin",
    hourlyRate: 11.5,
    totalShifts: 6,
    totalEarnings: 414,
    fitScore: 95,
    whyThisJob: "You're already doing great! 2 shifts completed, 4 more to go.",
    icon: coffeeIcon,
    streakBadge: "Active job",
    timeCommitment: "Mon-Sat, 16-20 PM",
    nextShiftDate: "Tomorrow",
    isActive: true,
    completedShifts: 2
  },
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
      {/* Title */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-primary">Job feed</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 pb-4">
        <div className="flex border-b border-foreground">
          <button className="flex-1 py-3 px-4 text-foreground font-medium text-sm border-b-2 border-foreground">
            Flexible jobs
          </button>
          <button className="flex-1 py-3 px-4 text-muted-foreground font-medium text-sm">
            Working student jobs
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-primary text-primary-foreground sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Multi-Shift Jobs</h2>
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" aria-label="AI recommendations" />
              <div>
                <h2 className="text-lg font-semibold">AI Recommendations</h2>
                <p className="text-muted-foreground text-sm">Personalized multi-shift opportunities</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-black text-white border-black hover:bg-black/90 rounded-full touch-target">
              Filter
              <Filter className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="job-card p-4 cursor-pointer animate-slide-up touch-target"
                  onClick={() => navigate(`/job/${job.id}`)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${job.title} at ${job.company}`}>
              {/* Header with earnings and fit score */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div>
                    <div className="font-bold text-lg text-foreground">€{job.totalEarnings}</div>
                    <div className="text-sm text-muted-foreground">€{job.hourlyRate}/hour</div>
                  </div>
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

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="truncate">{job.location}</span>
              </div>

              {/* Timeline section */}
              <div className="bg-muted/50 p-3 rounded-lg mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm font-medium">{job.totalShifts} shifts</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-medium">First shift</div>
                    <div className="text-muted-foreground text-xs">
                      {job.nextShiftDate === "Tomorrow" ? "Tomorrow" : `in ${Math.floor(Math.random() * 8) + 1} days`} • 7:00-11:00 AM
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Last shift</div>
                    <div className="text-muted-foreground text-xs">
                      {job.id === "coffee-central" ? "in 5 days" : job.id === "retail-fashion" ? "in 9 days" : "in 3 days"} • {job.id === "retail-fashion" ? "10:00-19:00 PM" : job.id === "office-admin" ? "14:00-22:00 PM" : "7:00-11:00 AM"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Streak Preview - only for active jobs */}
              {job.isActive && job.completedShifts && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Earnings Streak</span>
                    <span className="font-medium">€{(job.completedShifts * job.hourlyRate * 4).toFixed(0)} earned / €{job.totalEarnings} total</span>
                  </div>
                  <Progress value={(job.completedShifts / job.totalShifts) * 100} className="h-2" 
                           aria-label={`Earnings progress: ${job.completedShifts} out of ${job.totalShifts} shifts completed`} />
                </div>
              )}

              <Button className="w-full rounded-full" size="default" variant="default">
                View Details • Starts {job.nextShiftDate}
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline" size="lg" className="touch-target rounded-full">
            Show More Recommendations
          </Button>
        </div>
      </div>

      {/* Mobile sticky bottom space */}
      <div className="h-20 bg-background"></div>
    </div>
  );
}