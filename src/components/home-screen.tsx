"'use client'"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Dumbbell, Flame, Home, LineChart, User } from "lucide-react"

export function HomeScreen() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-neutral-950">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">4Dgainz</h1>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>CO</AvatarFallback>
        </Avatar>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Workout of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Full Body HIIT</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">45 minutes • High Intensity</p>
            <Button className="mt-4 w-full">Start Workout</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">Weekly Goal</p>
              <Progress value={70} className="w-full" />
              <p className="text-sm text-neutral-500 dark:text-neutral-400">5 of 7 workouts completed</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
            <Dumbbell className="h-6 w-6 mb-2" />
            Strength
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
            <Flame className="h-6 w-6 mb-2" />
            Cardio
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
            <User className="h-6 w-6 mb-2" />
            Yoga
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
            <LineChart className="h-6 w-6 mb-2" />
            Stats
          </Button>
        </div>
      </main>

      <footer className="flex justify-around items-center p-4 border-t bg-white dark:bg-neutral-950">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Dumbbell className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <LineChart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
        </Button>
      </footer>
    </div>
  )
}
