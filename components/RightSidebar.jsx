"use client";
import Image from "next/image";
import { Bug,User ,Radio  } from "lucide-react";
function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-[14px] font-medium text-black mb-4">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
function NotificationItem({
  icon: Icon,
  iconBg,
  iconColor = "#000",
  text,
  time,
}) {
  return (
    <div className="flex gap-3 group cursor-pointer">
      
      {/* Icon wrapper */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-4 h-4" style={{ color: iconColor }} />
      </div>

      {/* Text block */}
      <div
        className="transition-transform duration-200 ease-out
                   group-hover:translate-x-[4px]"
      >
        <p className="text-[14px] text-black leading-[20px]">
          {text}
        </p>
        <span className="text-[12px] text-black/40">
          {time}
        </span>
      </div>
    </div>
  );
}


function ActivityItem({ text, time, image }) {
  return (
    <div className="relative flex gap-3 group cursor-pointer">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="w-px flex-1 bg-gray-200 mt-1" />
      </div>

      {/* Text block */}
      <div
        className="transition-transform duration-200 ease-out
                   group-hover:translate-x-[4px]"
      >
        <p className="text-[14px] text-black leading-[20px]">
          {text}
        </p>
        <span className="text-[12px] text-black/40">
          {time}
        </span>
      </div>
    </div>
  );
}


function ContactItem({ name, image }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="text-[14px] text-black">{name}</span>
    </div>
  );
}


export default function RightSidebar() {
  return (
    <aside className="w-80 bg-white px-6 py-6 space-y-8">
      
      {/* Notifications */}
      <Section title="Notifications">
        <NotificationItem icon = {Bug} iconBg="#EEF0FF" text="You fixed a bug." time="Just now" />
        <NotificationItem icon = {User} iconBg="#EAF4FF" text="New user registered." time="59 minutes ago" />
        <NotificationItem icon = {Bug} iconBg="#EEF0FF" text="You fixed a bug." time="12 hours ago" />
        <NotificationItem icon = {Radio} iconBg="#EAF4FF" text="Andi Lane subscribed to you." time="Today, 11:59 AM" />
      </Section>

      {/* Activities */}
      <Section title="Activities">
        <ActivityItem text="Changed the style." time="Just now" image = "/1.png" />
        <ActivityItem text="Released a new version." time="59 minutes ago" image = "/2.png" />
        <ActivityItem text="Submitted a bug." time="12 hours ago" image = "/3.png" />
        <ActivityItem text="Modified A data in Page X." time="Today, 11:59 AM" image = "/4.png" />
        <ActivityItem text="Deleted a page in Project X." time="Feb 2, 2025" image = "/5.png" />
      </Section>

      {/* Contacts */}
      <Section title="Contacts">
        <ContactItem name="Natali Craig" image = "/nat.png" />
        <ContactItem name="Drew Cano" image = "/drew.png" />
        <ContactItem name="Andi Lane" image = "/andi.png" />
        <ContactItem name="Koray Okumus" image = "/koray.png" />
        <ContactItem name="Kate Morrison" image = "/kate.png" />
      </Section>

    </aside>
  );
}
