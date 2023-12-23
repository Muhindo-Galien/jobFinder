
import { int64, nat64, Null, Opt, Principal, Record, text, Vec, Enum } from "azle";

const Category = Record({
  name: text,
});

enum Level {
  Entry,
  Intermediate,
  Expert,
}

enum Payment {
  Hourly,
  Monthly,
  Fixed,
}

export const User = Record({
  id: Principal,
  createdAt: nat64,
  updatedAt: Opt(nat64),
  name: text,
  username: text,
  email: text,
  phone: text,
  password: text,
});

export const UserPayload = Record({
  name: text,
  username: text,
  email: text,
  phone: text,
  password: text,
});

export const Job = Record({
  id: text,
  authorId: Principal,
  applies: Vec(Principal),
  applyCount: int64,
  createdAt: nat64,
  updatedAt: Opt(nat64),
  authorName: text,
  authorPhone: text,
  authorEmail: text,
  title: text,
  description: text,
  price: int64,
  level: Enum(Level),
  payment: Enum(Payment),
  skills: Vec(Category),
});

export const JobPayload = Record({
  title: text,
  description: text,
  price: int64,
  level: Enum(Level),
  payment: Enum(Payment),
  skills: Vec(Category),
});

export const Error = Record({
  NotFound: text,
  InvalidPayload: text,
  AuthenticationError: text,
  DuplicateUser: text,
});
