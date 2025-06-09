'use server';

/**
 * @fileOverview An AI agent that customizes landing page animations based on user scrolling behavior and viewing patterns.
 *
 * - customizeAnimations - A function that handles the animation customization process.
 * - CustomizeAnimationsInput - The input type for the customizeAnimations function.
 * - CustomizeAnimationsOutput - The return type for the customizeAnimations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeAnimationsInputSchema = z.object({
  scrollDepth: z.number().describe('The percentage of the page the user has scrolled through.'),
  viewedElements: z
    .array(z.string())
    .describe('An array of IDs of the elements the user has viewed.'),
  pageTheme: z
    .string()
    .optional()
    .describe('The landing page theme, such as light or dark, if applicable.'),
});
export type CustomizeAnimationsInput = z.infer<typeof CustomizeAnimationsInputSchema>;

const CustomizeAnimationsOutputSchema = z.object({
  animationAdjustments: z.object({
    elementFadeInDelay: z
      .number()
      .describe('The delay in milliseconds before an element fades in.'),
    elementSlideInDistance: z
      .number()
      .describe('The distance in pixels an element slides in from.'),
    colorPaletteAdjustment: z
      .string()
      .describe('Color adjustments depending on the users scrolling behavior'),
  }),
});
export type CustomizeAnimationsOutput = z.infer<typeof CustomizeAnimationsOutputSchema>;

export async function customizeAnimations(input: CustomizeAnimationsInput): Promise<CustomizeAnimationsOutput> {
  return customizeAnimationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeAnimationsPrompt',
  input: {schema: CustomizeAnimationsInputSchema},
  output: {schema: CustomizeAnimationsOutputSchema},
  prompt: `You are an expert in user experience and animation design. Based on the user's scrolling behavior and the elements they have viewed, you will adjust the landing page animations to create a more dynamic and personalized experience.

  The user has scrolled through {{scrollDepth}}% of the page and has viewed the following elements: {{viewedElements}}.

  Adjust the elementFadeInDelay and elementSlideInDistance values to create more engaging animations, and also recommend color adjustments.

  Make the experience better according to the users scrolling behavior.

  Consider the page theme: {{pageTheme}}

  Return the adjustments in the following JSON format:
  {{output}}`,
});

const customizeAnimationsFlow = ai.defineFlow(
  {
    name: 'customizeAnimationsFlow',
    inputSchema: CustomizeAnimationsInputSchema,
    outputSchema: CustomizeAnimationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
