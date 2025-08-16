import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Shield, Brain, TrendingUp, Users, Gift, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";
import coffeeIcon from "@/assets/coffee-shop-icon.jpg";
import retailIcon from "@/assets/retail-icon.jpg";
import officeIcon from "@/assets/office-icon.jpg";
export default function CommitmentScreen() {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const [inviteFriend, setInviteFriend] = useState(false);
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  
  const jobsData = {
    "coffee-central": {
      title: "Barista Assistant",
      company: "Central Café",
      totalShifts: 5,
      totalEarnings: 400,
      icon: coffeeIcon,
      successRate: 85,
      startDate: "Tomorrow",
      endDate: "Friday"
    },
    "retail-fashion": {
      title: "Sales Associate",
      company: "Urban Style",
      totalShifts: 4,
      totalEarnings: 364,
      icon: retailIcon,
      successRate: 78,
      startDate: "This Saturday",
      endDate: "Next Sunday"
    },
    "office-admin": {
      title: "Administrative Support",
      company: "TechStart GmbH",
      totalShifts: 3,
      totalEarnings: 336,
      icon: officeIcon,
      successRate: 92,
      startDate: "Wednesday",
      endDate: "Friday"
    }
  };

  const job = jobsData[id as keyof typeof jobsData] || jobsData["coffee-central"];
  return <div className="mobile-container bg-background">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(`/job/${id}`)} aria-label="Go back to job details" className="touch-target">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img src={job.icon} alt={`${job.company} logo`} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg font-semibold leading-tight">Confirm Booking</h1>
                <p className="text-muted-foreground text-sm truncate">{job.title} • {job.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 pb-24">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Review job details</h1>
          <p className="text-muted-foreground">Please review the job details and make sure it works for you before applying.</p>
        </div>

        <div className="space-y-6">
          {/* AI Micro-scheduling Check */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">AI Schedule Check</h2>
                <p className="text-sm text-muted-foreground">Analyzing your calendar and commitments</p>
              </div>
            </div>
            
            <div className="bg-success-light p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-medium text-success">All clear!</span>
              </div>
              <p className="text-sm text-success">
                No conflicts found with your university schedule. Morning shifts perfectly align with your availability preferences.
              </p>
            </div>
          </Card>

          {/* Risk-free Trial */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Risk-free Trial</h3>
                <p className="text-sm text-muted-foreground">Flexible cancellation policy</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm">Cancel individual shifts with 48h notice</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm">No penalty for first-time cancellations</span>
              </div>
              
            </div>
          </Card>

          {/* Predicted Success Rate */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Success Prediction</h3>
                <p className="text-sm text-muted-foreground">Based on your profile and job match</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Predicted job rating</span>
                <span className="font-semibold text-primary">{job.successRate}%</span>
              </div>
              <Progress value={job.successRate} className="h-3" />
              <p className="text-xs text-muted-foreground">Students with similar profiles were rated on average 4.2+ stars</p>
            </div>
          </Card>

          {/* Commitment Rewards */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gamification/10 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-gamification" />
              </div>
              <div>
                <h3 className="font-semibold">Commitment Rewards</h3>
                <p className="text-sm text-muted-foreground">Earn extra for completing the series</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gamification-light p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gamification-foreground">Completion Bonus</span>
                  <span className="text-xl font-bold text-gamification">€10</span>
                </div>
                <Progress value={0} className="h-2 mb-2 bg-white" />
                <p className="text-xs text-gamification-foreground">Complete all 5 shifts to unlock</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-primary">+200</div>
                  <div className="text-xs text-muted-foreground">XP Points</div>
                </div>
                <div className="bg-muted p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-success">4.8⭐</div>
                  <div className="text-xs text-muted-foreground">Avg. Rating</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Invite a Friend */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Invite a Friend</h3>
                <p className="text-sm text-muted-foreground">Earn €5 when they complete their first shift</p>
              </div>
              <Checkbox checked={inviteFriend} onCheckedChange={checked => setInviteFriend(checked as boolean)} />
            </div>
            
            {inviteFriend && <div className="bg-warning-light p-4 rounded-lg animate-slide-up">
                <p className="text-sm text-warning-foreground font-medium mb-2">
                  Perfect! We'll send you a referral link after booking.
                </p>
                <p className="text-xs text-warning-foreground">
                  Your friend gets priority access to similar shifts, and you both earn bonus rewards.
                </p>
              </div>}
          </Card>

          {/* Final Confirmation */}
          <Card className="p-6 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Checkbox checked={confirmationChecked} onCheckedChange={checked => setConfirmationChecked(checked as boolean)} />
                <div>
                  <p className="text-sm font-medium">I confirm my commitment to all 5 shifts</p>
                  <p className="text-xs text-muted-foreground">
                    {job.startDate} - {job.endDate}, 7:00-11:00 AM at {job.company}
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span className="text-sm font-medium">Remember</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Be on time for the best experience</li>
                  <li>• Bring a positive attitude and willingness to learn</li>
                  <li>• Contact us if any issues arise</li>
                </ul>
              </div>
            </div>
          </Card>

        </div>
      </div>

      {/* Sticky bottom buttons */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-background p-4 border-t">
        <Button className="w-full touch-target rounded-full" size="lg" disabled={!confirmationChecked} onClick={() => navigate(`/confirmation/${id}`)}>
          Submit Application
        </Button>
      </div>
    </div>;
}