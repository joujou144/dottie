import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DotIcon, ExternalLink, Heart } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/chatb.png" alt="Dottie Logo" width={32} height={32} />
          <span className="font-semibold text-pink-500">Dottie</span>
        </div>
        <Link href="/" className="text-gray-500">
          X
        </Link>
      </header>

      <main className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6">Resources & Next Steps</h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Helpful Resources</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">ACOG: Your First Period</h3>
                <p className="text-sm text-gray-600 mb-3">Information about what to expect from your menstrual cycle</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn more
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Teenage Menstrual Health</h3>
                <p className="text-sm text-gray-600 mb-3">Age-appropriate guidance on managing your period</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn more
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Talking to Parents About Periods</h3>
                <p className="text-sm text-gray-600 mb-3">Tips for discussing menstrual health with adults you trust</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn more
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">What's Next</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 font-medium">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Start Tracking Your Cycle</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Setting up your personalized cycle tracking will help you better understand your patterns.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Set up cycle tracking
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 font-medium">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Learn About Your Body</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Explore our educational materials designed specifically for teens about menstrual health.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View resources
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 font-medium">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Talk To Someone</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Consider sharing your results with a parent, trusted adult, or healthcare provider if you have
                      concerns.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get conversation tips
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="w-full mb-8 bg-pink-50 border-pink-100">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <Heart className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">A Note on Teen Menstrual Health</h3>
                <p className="text-sm text-gray-600 mb-2">
                  It's completely normal for your periods to be irregular when you're first starting. For most people,
                  it takes 2-3 years after your first period for cycles to become regular. During this time, cycle
                  lengths can vary widely.
                </p>
                <p className="text-sm text-gray-600">
                  Learning about your body and tracking your cycle is a great first step towards taking charge of your
                  health. Remember that everyone's body is different, and what's "normal" varies from person to person.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-auto text-center">
          <div className="flex items-center justify-center mb-3">
            <DotIcon className="h-5 w-5 text-pink-500 fill-pink-500 mr-1" />
            <span className="font-semibold text-pink-500">Dottie</span>
          </div>
          <div className="text-xs text-gray-500 mb-2">Your health information is private and secure.</div>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Contact Support</Link>
          </div>
        </footer>
      </main>
    </div>
  )
}

