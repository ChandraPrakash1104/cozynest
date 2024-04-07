import { z } from 'zod';

const UserValidationSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  address: z.string().optional(),
  phone_number: z.string().min(10).max(10).optional(),
});

type UserValidationInput = z.infer<typeof UserValidationSchema>;

export { UserValidationSchema, UserValidationInput };
