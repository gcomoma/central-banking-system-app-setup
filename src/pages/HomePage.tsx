
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  CreditCard,
  BarChart3,
  Lock
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="banking-hero text-white py-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Central Banking System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
              Secure, scalable, and comprehensive banking infrastructure for the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Access Dashboard
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-banking-navy">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {formatNumber(1247)}
              </div>
              <div className="text-muted-foreground">Connected Banks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {formatCurrency(2.4e12)}
              </div>
              <div className="text-muted-foreground">Total Assets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">
                {formatNumber(45.2e6)}
              </div>
              <div className="text-muted-foreground">Active Accounts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Core Banking Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for modern central banking operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Bank Management</CardTitle>
                <CardDescription>
                  Comprehensive oversight of member banks and financial institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Monitor bank performance, compliance, and regulatory requirements
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Account Operations</CardTitle>
                <CardDescription>
                  Advanced account management and transaction processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Real-time processing with advanced security and fraud detection
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-success mb-4" />
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>
                  Comprehensive financial analytics and regulatory reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Advanced reporting tools for compliance and decision making
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-warning mb-4" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Enterprise-grade security with regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Multi-layer security with audit trails and compliance monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Integration</CardTitle>
                <CardDescription>
                  International banking standards and cross-border operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  SWIFT integration and international regulatory compliance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-banking transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>
                  Advanced risk assessment and mitigation tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-32 bg-muted rounded-lg mb-4"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Real-time risk monitoring with predictive analytics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Banking?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the future of central banking with our comprehensive platform
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}