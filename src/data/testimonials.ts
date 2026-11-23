export type Testimonial = { quote: string; attribution: string; context?: string };

// Add only approved quotes and attribution, with permission to publish.
// Example shape: { quote: 'Approved quote', attribution: 'Approved name', context: 'Approved context' }
export const testimonials: Testimonial[] = [];
