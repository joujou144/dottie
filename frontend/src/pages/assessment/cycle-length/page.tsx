'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/src/components/ui/!to-migrate/button';
import { Card, CardContent } from '@/src/components/ui/!to-migrate/card';
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/!to-migrate/radio-group';
import { Label } from '@/src/components/ui/!to-migrate/label';
import { ChevronRight, ChevronLeft, InfoIcon } from 'lucide-react';
import { useQuickNavigate } from '@/src/hooks/useQuickNavigate';

export default function CycleLengthPage() {
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const [refTarget, setRefTarget] = useState('');
  const location = useLocation();
  const radioRef = useRef<HTMLButtonElement | null>(null);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isQuickResponse } = useQuickNavigate();

  useEffect(() => {
    if (!isQuickResponse) return;
    const options = ['21-25', '26-30', '31-35', '36-40', 'Irregular', "I'm not sure", 'Other'];
    const random = options[Math.floor(Math.random() * options.length)];
    setRefTarget(random);

    setTimeout(() => {
      if (radioRef.current) {
        radioRef.current.click();
      }
    }, 100);

    setTimeout(() => {
      if (continueButtonRef.current) {
        continueButtonRef.current.click();
      }
    }, 100);
  }, [isQuickResponse]);

  const handleLengthChange = (value: string) => {
    setSelectedLength(value);
    sessionStorage.setItem('cycleLength', value);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">33% Complete</div>
        </div>

        <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
          <div className="h-2 w-[33%] rounded-full bg-pink-500"></div>
        </div>

        <div className="mb-8 flex flex-col gap-8 lg:flex-row">
          <div className="items-top flex justify-center text-center lg:w-1/2 lg:justify-start lg:text-left">
            <div className="flex flex-col gap-3">
              <h1 className="mb-2 text-xl font-bold dark:text-slate-100">Question 2 of 6</h1>
              <h2 className="mb-1 text-3xl font-semibold dark:text-slate-100">
                How long is your menstrual cycle?
              </h2>
              <p className="mb-6 text-sm text-gray-500 dark:text-slate-200">
                Count from the first day of one period to the first day of the next period
              </p>
              <img
                src="/assessmentAssets/cycle.svg"
                alt=""
                className="contrast-125 filter transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          <Card className="w-full border shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-slate-800 lg:w-1/2">
            <CardContent className="pb-8 pt-8">
              <RadioGroup
                value={selectedLength || ''}
                onValueChange={handleLengthChange}
                className="mb-6"
              >
                <div className="space-y-3">
                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === '21-25'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="21-25"
                      id="21-25"
                      ref={refTarget === '21-25' ? radioRef : null}
                    />
                    <Label htmlFor="21-25" className="flex-1 cursor-pointer">
                      <div className="font-medium">21-25 days</div>
                      <p className="text-sm text-gray-500">Shorter than average</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === '26-30'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="26-30"
                      id="26-30"
                      ref={refTarget === '26-30' ? radioRef : null}
                    />
                    <Label htmlFor="26-30" className="flex-1 cursor-pointer">
                      <div className="font-medium">26-30 days</div>
                      <p className="text-sm text-gray-500">Average length</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === '31-35'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="31-35"
                      id="31-35"
                      ref={refTarget === '31-35' ? radioRef : null}
                    />
                    <Label htmlFor="31-35" className="flex-1 cursor-pointer">
                      <div className="font-medium">31-35 days</div>
                      <p className="text-sm text-gray-500">Longer than average</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === '36-40'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="36-40"
                      id="36-40"
                      ref={refTarget === '36-40' ? radioRef : null}
                    />
                    <Label htmlFor="36-40" className="flex-1 cursor-pointer">
                      <div className="font-medium">36-40 days</div>
                      <p className="text-sm text-gray-500">Extended cycle</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === 'irregular'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="irregular"
                      id="irregular"
                      ref={refTarget === 'Irregular' ? radioRef : null}
                    />
                    <Label htmlFor="irregular" className="flex-1 cursor-pointer">
                      <div className="font-medium">Irregular</div>
                      <p className="text-sm text-gray-500">Varies by more than 7 days</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === 'not-sure'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="not-sure"
                      id="not-sure"
                      ref={refTarget === "I'm not sure" ? radioRef : null}
                    />
                    <Label htmlFor="not-sure" className="flex-1 cursor-pointer">
                      <div className="font-medium">{"I'm not sure"}</div>
                      <p className="text-sm text-gray-500">Need help tracking</p>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-2 rounded-lg border p-3 transition-all duration-300 dark:border-slate-800 dark:hover:text-gray-900 ${
                      selectedLength === 'other'
                        ? 'border-pink-500 bg-pink-50 dark:text-gray-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <RadioGroupItem
                      value="other"
                      id="other"
                      ref={refTarget === 'Other' ? radioRef : null}
                    />
                    <Label htmlFor="other" className="flex-1 cursor-pointer">
                      <div className="font-medium">Other</div>
                      <p className="text-sm text-gray-500">Specify your own cycle length</p>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 w-full border-pink-100 bg-pink-50">
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <InfoIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-600" />
              <div>
                <h3 className="mb-1 font-semibold text-gray-800">About Menstrual Cycles</h3>
                <p className="text-sm text-gray-600">
                  A typical menstrual cycle can range from 21 to 35 days. Cycles outside this range
                  or that vary significantly may indicate hormonal fluctuations.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Not sure? Try using our period tracker for 2-3 months to discover your pattern.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-auto flex w-full justify-between">
          <Link to="/assessment/age-verification">
            <Button
              variant="outline"
              className="flex items-center px-6 py-6 text-lg dark:bg-gray-900 dark:text-pink-600 dark:hover:text-pink-700"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
          </Link>

          <Link
            to={
              selectedLength
                ? `/assessment/period-duration${
                    location.search.includes('mode=quickresponse') ? '?mode=quickresponse' : ''
                  }`
                : '#'
            }
          >
            <Button
              className={`flex items-center px-6 py-6 text-lg ${
                selectedLength
                  ? 'bg-pink-600 text-white hover:bg-pink-700'
                  : 'cursor-not-allowed bg-gray-300 text-gray-500'
              }`}
              disabled={!selectedLength}
              ref={continueButtonRef}
            >
              Continue
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
