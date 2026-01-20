import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertContactMessage } from "@shared/schema";

// === GET HOOKS ===

export function useAnnouncements() {
  return useQuery({
    queryKey: [api.announcements.list.path],
    queryFn: async () => {
      const res = await fetch(api.announcements.list.path);
      if (!res.ok) throw new Error("Failed to fetch announcements");
      return api.announcements.list.responses[200].parse(await res.json());
    },
  });
}

export function useEvents() {
  return useQuery({
    queryKey: [api.events.list.path],
    queryFn: async () => {
      const res = await fetch(api.events.list.path);
      if (!res.ok) throw new Error("Failed to fetch events");
      return api.events.list.responses[200].parse(await res.json());
    },
  });
}

export function useCourses() {
  return useQuery({
    queryKey: [api.courses.list.path],
    queryFn: async () => {
      const res = await fetch(api.courses.list.path);
      if (!res.ok) throw new Error("Failed to fetch courses");
      return api.courses.list.responses[200].parse(await res.json());
    },
  });
}

export function useTeachers() {
  return useQuery({
    queryKey: [api.teachers.list.path],
    queryFn: async () => {
      const res = await fetch(api.teachers.list.path);
      if (!res.ok) throw new Error("Failed to fetch teachers");
      return api.teachers.list.responses[200].parse(await res.json());
    },
  });
}

export function useDailyInspirations() {
  return useQuery({
    queryKey: [api.inspirations.list.path],
    queryFn: async () => {
      const res = await fetch(api.inspirations.list.path);
      if (!res.ok) throw new Error("Failed to fetch inspirations");
      return api.inspirations.list.responses[200].parse(await res.json());
    },
  });
}

// === MUTATION HOOKS ===

export function useContactMutation() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
           // Try to parse validation error
           const error = api.contact.create.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
