/*
# Update contact_submissions table with new enquiry fields

1. Modified Tables
- `contact_submissions`
  - Add `city` (text, not null) — user's city
  - Add `loan_amount` (text, nullable) — optional loan amount
  - Add `course_interested` (text, nullable) — optional course of interest
2. Security
- No policy changes; existing anon INSERT policy remains in effect.
*/

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS city text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS loan_amount text,
  ADD COLUMN IF NOT EXISTS course_interested text;
