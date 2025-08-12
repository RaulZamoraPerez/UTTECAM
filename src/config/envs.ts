import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
  EMAILJS_PUBLIC_KEY: get('VITE_EMAILJS_PUBLIC_KEY').required().asString(),
  EMAILJS_SERVICE_ID: get('VITE_EMAILJS_SERVICE_ID').required().asString(),
  EMAILJS_TEMPLATE_ID: get('VITE_EMAILJS_TEMPLATE_ID').required().asString(),
};


