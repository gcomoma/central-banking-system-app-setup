
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AccountsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Account Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Operations</CardTitle>
          <CardDescription>Manage bank accounts and customer information</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Account management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}