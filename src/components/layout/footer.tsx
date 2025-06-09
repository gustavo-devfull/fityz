
'use client';

import type { FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { Instagram, Mail, MessageSquare, Phone } from 'lucide-react'; // MessageSquare for WhatsApp like icon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

interface IFormInput {
  name: string;
  email: string;
  whatsapp?: string;
  company?: string;
  message: string;
}

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // In a real app, send this data to a backend
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
      variant: "default",
    });
    reset();
  };

  return (
    <footer id="contact" className="bg-background border-t border-border py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Contact Info Column */}
          <AnimatedWrapper elementId="footer-contact-info" animationType="slide-in-left">
            <div className="space-y-8">
              <Link href="/" className="text-3xl font-bold text-foreground" aria-label="FITYZ Home">
                <span className="font-headline">FITYZ</span>
              </Link>
              <p className="text-muted-foreground">
                Soluções modulares para ergonomia e liberdade no seu setup.
              </p>
              <div>
                <h3 className="mb-3 font-semibold text-foreground text-lg">Entre em Contato</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-foreground" />
                    <a href="https://instagram.com/fityzsuportes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      @fityzsuportes
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-foreground" />
                    <a href="mailto:vendas@fityzsuportes.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                      vendas@fityzsuportes.com.br
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-foreground" /> {/* Using Phone icon as WhatsApp is specific */}
                    <a href="https://wa.me/5515998760000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      +55 15 99876-0000 (WhatsApp)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Contact Form Column */}
          <AnimatedWrapper elementId="footer-contact-form" animationType="slide-in-right">
            <div>
              <h3 className="mb-6 font-semibold text-foreground text-xl">Fale Conosco</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="footer-name" className="font-medium text-foreground">Nome Completo</Label>
                  <Input
                    id="footer-name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className={`mt-1 bg-secondary text-foreground placeholder:text-muted-foreground ${errors.name ? 'border-destructive' : 'border-input'}`}
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="footer-email" className="font-medium text-foreground">E-mail</Label>
                  <Input
                    id="footer-email"
                    type="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório', 
                      pattern: { value: /^\S+@\S+$/i, message: 'Endereço de e-mail inválido' } 
                    })}
                    className={`mt-1 bg-secondary text-foreground placeholder:text-muted-foreground ${errors.email ? 'border-destructive' : 'border-input'}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="footer-whatsapp" className="font-medium text-foreground">WhatsApp (Opcional)</Label>
                  <Input
                    id="footer-whatsapp"
                    type="tel"
                    {...register('whatsapp')}
                    className="mt-1 bg-secondary text-foreground placeholder:text-muted-foreground border-input"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
                 <div>
                  <Label htmlFor="footer-company" className="font-medium text-foreground">Empresa (Opcional)</Label>
                  <Input
                    id="footer-company"
                    {...register('company')}
                    className="mt-1 bg-secondary text-foreground placeholder:text-muted-foreground border-input"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-message" className="font-medium text-foreground">Mensagem</Label>
                  <Textarea
                    id="footer-message"
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    rows={4}
                    className={`mt-1 bg-secondary text-foreground placeholder:text-muted-foreground ${errors.message ? 'border-destructive' : 'border-input'}`}
                    placeholder="Sua mensagem aqui..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Bottom Bar */}
        <AnimatedWrapper elementId="footer-bottom-bar" animationType="fade-in-up" delayMs={300}>
          <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <Link href="/privacy-policy" className="hover:text-foreground">Política de Privacidade</Link>
            </p>
            <p className="mb-1">&copy; {currentYear} FITYZ. Todos os direitos reservados.</p>
            <p className="inline-flex items-center gap-2">
                <span>@davimportados</span>
                <span className="text-xs">|</span> 
                <span>Desenvolvimento: <a href="#" className="hover:text-foreground">gento</a></span>
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </footer>
  );
};

    