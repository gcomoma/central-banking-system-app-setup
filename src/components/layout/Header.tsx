
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">CentralBank</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/accounts" className="text-foreground hover:text-primary transition-colors">
              Accounts
            </Link>
            <Link to="/transactions" className="text-foreground hover:text-primary transition-colors">
              Transactions
            </Link>
            <Link to="/banks" className="text-foreground hover:text-primary transition-colors">
              Banks
            </Link>
            <Link to="/reports" className="text-foreground hover:text-primary transition-colors">
              Reports
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}