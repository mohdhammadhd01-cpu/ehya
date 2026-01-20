import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Announcements
  app.get(api.announcements.list.path, async (req, res) => {
    const data = await storage.getAnnouncements();
    res.json(data);
  });

  // Events
  app.get(api.events.list.path, async (req, res) => {
    const data = await storage.getEvents();
    res.json(data);
  });

  // Courses
  app.get(api.courses.list.path, async (req, res) => {
    const data = await storage.getCourses();
    res.json(data);
  });

  // Teachers
  app.get(api.teachers.list.path, async (req, res) => {
    const data = await storage.getTeachers();
    res.json(data);
  });

  // Contact
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Daily Inspirations
  app.get(api.inspirations.list.path, async (req, res) => {
    const data = await storage.getDailyInspirations();
    res.json(data);
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCourses = await storage.getCourses();
  if (existingCourses.length === 0) {
    await storage.createCourse({
      title: "Hifz",
      description: "Comprehensive Quran memorization program.",
      ageGroup: "9-18 years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "Hadith Studies",
      description: "Deep dive into the Prophetic traditions and their applications.",
      ageGroup: "12+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "Hindi Language",
      description: "Learning to read, write, and speak Hindi fluently.",
      ageGroup: "6+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "English Literacy",
      description: "Basic to advanced English language skills.",
      ageGroup: "6+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "Arabic Language",
      description: "Mastering Arabic grammar and conversation.",
      ageGroup: "8+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "Mathematics",
      description: "Foundational and advanced mathematical concepts.",
      ageGroup: "6+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
    await storage.createCourse({
      title: "Tazweed",
      description: "Perfecting Quranic pronunciation and phonology.",
      ageGroup: "6+ years",
      schedule: "Sat-Thu, 9 AM - 4 PM (Friday Holiday)"
    });
  }

  const existingAnnouncements = await storage.getAnnouncements();
  if (existingAnnouncements.length === 0) {
    await storage.createAnnouncement({
      title: "New Session Registration",
      content: "Registration for the new academic session is now open for Hifz and Arabic classes."
    });
    await storage.createAnnouncement({
      title: "Monthly Dua Gathering",
      content: "Join us for our monthly spiritual gathering this Friday after Maghrib prayer."
    });
  }

  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    await storage.createEvent({
      title: "Annual Qira'at Competition",
      description: "Students will showcase their recitation skills.",
      date: new Date("2024-12-15T10:00:00"),
      location: "Main Hall"
    });
  }

  const existingTeachers = await storage.getTeachers();
  if (existingTeachers.length === 0) {
    await storage.createTeacher({
      name: "Mufti Imamuddin",
      role: "Jamia-Hifz & Tazweed Instructor",
      bio: "Expert in Quranic memorization and the science of Tajweed. Contact: 9849132838",
      imageUrl: "https://placehold.co/400x400?text=MI"
    });
    await storage.createTeacher({
      name: "Rizwana",
      role: "Hindi & Maths Teacher",
      bio: "Dedicated teacher for foundational literacy and numeracy.",
      imageUrl: "https://placehold.co/400x400?text=RI"
    });
    await storage.createTeacher({
      name: "Mufti Abdulla",
      role: "Arabic Language Instructor",
      bio: "Specializing in Classical Arabic and Islamic jurisprudence.",
      imageUrl: "https://placehold.co/400x400?text=MA"
    });
    await storage.createTeacher({
      name: "Afreen",
      role: "Hadith Scholar",
      bio: "Researcher and lecturer in the science of Hadith.",
      imageUrl: "https://placehold.co/400x400?text=AF"
    });
  }

  const existingInspirations = await storage.getDailyInspirations();
  if (existingInspirations.length === 0) {
    await storage.createDailyInspiration({
      type: "hadith",
      content: "The best among you are those who learn the Quran and teach it.",
      source: "Sahih Bukhari",
      translation: "Tum mein se behtareen woh hai jo Quran seekhe aur sikhaye."
    });
    await storage.createDailyInspiration({
      type: "hadith",
      content: "Seeking knowledge is an obligation upon every Muslim.",
      source: "Sunan Ibn Majah",
      translation: "Ilm haasil karna har Musalman par farz hai."
    });
    await storage.createDailyInspiration({
      type: "dua",
      content: "Rabbi Zidni Ilma",
      source: "Quran 20:114",
      translation: "O my Lord, increase me in knowledge."
    });
    await storage.createDailyInspiration({
      type: "dua",
      content: "Allahumma inni as'aluka 'ilman nafi'an",
      source: "Sunan Ibn Majah",
      translation: "O Allah, I ask You for knowledge that is of benefit."
    });
  }
}
