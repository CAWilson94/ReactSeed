
/**
 * Example of a utils function that can be used throughout the app.
 */

import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('MMMM D, YYYY h:mm A');