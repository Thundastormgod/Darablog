"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SubscribeForm() {
  const [subscribers, setSubscribers] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubscribers(data.count);
      toast.success('Successfully subscribed!');
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-md dark:bg-neutral-900 dark:border-neutral-700"
          disabled={isLoading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md dark:bg-neutral-900 dark:border-neutral-700"
          disabled={isLoading}
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Subscribers: <span className="font-semibold">{subscribers}</span>
      </p>
    </form>
  );
}