
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BanksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Bank Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Member Banks</CardTitle>
          <CardDescription>Manage and monitor member financial institutions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Bank management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}