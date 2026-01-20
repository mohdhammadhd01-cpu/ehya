import { 
  announcements, events, courses, teachers, contactMessages, dailyInspirations,
  type Announcement, type InsertAnnouncement,
  type Event, type InsertEvent,
  type Course, type InsertCourse,
  type Teacher, type InsertTeacher,
  type ContactMessage, type InsertContactMessage,
  type DailyInspiration, type InsertDailyInspiration
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  getCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  getTeachers(): Promise<Teacher[]>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getDailyInspirations(): Promise<DailyInspiration[]>;
  createDailyInspiration(inspiration: InsertDailyInspiration): Promise<DailyInspiration>;
}

export class DatabaseStorage implements IStorage {
  async getAnnouncements(): Promise<Announcement[]> {
    return await db.select().from(announcements).orderBy(announcements.date);
  }

  async createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement> {
    const [newItem] = await db.insert(announcements).values(announcement).returning();
    return newItem;
  }

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(events.date);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newItem] = await db.insert(events).values(event).returning();
    return newItem;
  }

  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const [newItem] = await db.insert(courses).values(course).returning();
    return newItem;
  }

  async getTeachers(): Promise<Teacher[]> {
    return await db.select().from(teachers);
  }

  async createTeacher(teacher: InsertTeacher): Promise<Teacher> {
    const [newItem] = await db.insert(teachers).values(teacher).returning();
    return newItem;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newItem] = await db.insert(contactMessages).values(message).returning();
    return newItem;
  }

  async getDailyInspirations(): Promise<DailyInspiration[]> {
    return await db.select().from(dailyInspirations);
  }

  async createDailyInspiration(inspiration: InsertDailyInspiration): Promise<DailyInspiration> {
    const [newItem] = await db.insert(dailyInspirations).values(inspiration).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
