import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ootzfrvdvtrmffyrrdkq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdHpmcnZkdnRybWZmeXJyZGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTQxNjAsImV4cCI6MjAxNTI5MDE2MH0.XAMDm5hdqMBbra0YcLuAglIwbrmMSqxTGjIRWaeMy-c'
export const supabase = createClient(supabaseUrl, supabaseKey)