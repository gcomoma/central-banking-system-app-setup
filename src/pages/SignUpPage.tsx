
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Building2, Eye, EyeOff, Shield, UserPlus, AlertCircle, CheckCircle, X } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

interface PasswordStrength {
  score: number;
  feedback: string[];
  color: string;
}

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptMarketing: false
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const checkPasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    const feedback: string[] = [];

    if (password.length >= 8) score += 1;
    else feedback.push('At least 8 characters');

    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('One lowercase letter');

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('One uppercase letter');

    if (/\d/.test(password)) score += 1;
    else feedback.push('One number');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push('One special character');

    let color = 'bg-destructive';
    if (score >= 4) color = 'bg-success';
    else if (score >= 3) color = 'bg-warning';
    else if (score >= 2) color = 'bg-accent';

    return { score, feedback, color };
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Password validation
    const passwordStrength = checkPasswordStrength(formData.password);
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (passwordStrength.score < 3) {
      newErrors.password = 'Password is too weak';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to sign-in page on successful registration
      navigate('/signin', { 
        state: { 
          message: 'Account created successfully! Please sign in with your credentials.' 
        }
      });
    }, 2000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const passwordStrength = checkPasswordStrength(formData.password);
  const strengthPercentage = (passwordStrength.score / 5) * 100;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="w-full max-w-lg relative z-10 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">CentralBank</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">
            Join our secure banking platform today
          </p>
        </div>

        {/* Sign Up Card */}
        <Card className="banking-card animate-slide-in">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
            <CardDescription>
              Create your secure banking account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`banking-input ${errors.firstName ? 'border-destructive focus:ring-destructive' : ''}`}
                    disabled={isLoading}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-destructive flex items-center space-x-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`banking-input ${errors.lastName ? 'border-destructive focus:ring-destructive' : ''}`}
                    disabled={isLoading}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-destructive flex items-center space-x-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.lastName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`banking-input ${errors.email ? 'border-destructive focus:ring-destructive' : ''}`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center space-x-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`banking-input ${errors.phone ? 'border-destructive focus:ring-destructive' : ''}`}
                  disabled={isLoading}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive flex items-center space-x-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`banking-input pr-10 ${errors.password ? 'border-destructive focus:ring-destructive' : ''}`}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Password Strength</span>
                      <span className="text-xs font-medium">
                        {strengthPercentage < 40 ? 'Weak' : 
                         strengthPercentage < 80 ? 'Good' : 'Strong'}
                      </span>
                    </div>
                    <Progress 
                      value={strengthPercentage} 
                      className="h-2"
                    />
                    {passwordStrength.feedback.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        <p className="mb-1">Missing requirements:</p>
                        <ul className="space-y-1">
                          {passwordStrength.feedback.map((item, index) => (
                            <li key={index} className="flex items-center space-x-1">
                              <X className="h-3 w-3 text-destructive" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {errors.password && (
                  <p className="text-sm text-destructive flex items-center space-x-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`banking-input pr-10 ${errors.confirmPassword ? 'border-destructive focus:ring-destructive' : ''}`}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="text-sm text-success flex items-center space-x-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Passwords match</span>
                  </p>
                )}

                {errors.confirmPassword && (
                  <p className="text-sm text-destructive flex items-center space-x-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.confirmPassword}</span>
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
                      disabled={isLoading}
                      className={errors.acceptTerms ? 'border-destructive' : ''}
                    />
                    <Label htmlFor="acceptTerms" className="text-sm leading-5">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:text-primary/80 underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-primary hover:text-primary/80 underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-sm text-destructive flex items-center space-x-1 ml-6">
                      <AlertCircle className="h-3 w-3" />
                      <span>{errors.acceptTerms}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="acceptMarketing"
                    checked={formData.acceptMarketing}
                    onCheckedChange={(checked) => handleInputChange('acceptMarketing', !!checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="acceptMarketing" className="text-sm text-muted-foreground leading-5">
                    I would like to receive marketing communications and updates
                  </Label>
                </div>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <UserPlus className="h-4 w-4" />
                    <span>Create Account</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Security Notice */}
            <div className="p-4 bg-muted/50 rounded-lg border">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Your Information is Secure
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    We use bank-level encryption to protect your personal information. 
                    Your data is never shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground space-y-2">
          <p>
            Need help? Contact{' '}
            <Link to="/support" className="text-primary hover:text-primary/80 transition-colors">
              Customer Support
            </Link>
          </p>
          <p>
            © 2024 CentralBank. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}