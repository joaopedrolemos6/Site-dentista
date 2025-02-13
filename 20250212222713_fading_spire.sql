/*
  # Create appointments table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `date` (date)
      - `time` (time)
      - `service` (text)
      - `status` (text) - Para controle do status do agendamento

  2. Security
    - Enable RLS on `appointments` table
    - Add policies for:
      - Insert: Allow anyone to create appointments
      - Select: Allow authenticated staff to view appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  service text NOT NULL,
  status text DEFAULT 'pending'
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Permite que qualquer pessoa crie um agendamento
CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Apenas staff autenticado pode ver os agendamentos
CREATE POLICY "Authenticated staff can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

  CREATE POLICY "Public Read Access"
ON public.appointments
FOR SELECT
USING (true);
