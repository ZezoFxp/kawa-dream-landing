import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SuggestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuggestionDialog = ({ open, onOpenChange }: SuggestionDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Sugestão enviada!",
      description: "Obrigado pelo seu feedback. Valorizamos muito sua opinião!",
    });

    setName("");
    setEmail("");
    setSuggestion("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Deixe sua Sugestão</DialogTitle>
          <DialogDescription>
            Adoraríamos ouvir suas ideias para melhorar sua experiência no KawaCoffee.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="suggestion">Sugestão</Label>
            <Textarea
              id="suggestion"
              placeholder="Compartilhe sua ideia conosco..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
              rows={5}
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Enviar Sugestão
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionDialog;
