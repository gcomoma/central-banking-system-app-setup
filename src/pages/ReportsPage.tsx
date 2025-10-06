
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Reports & Analytics</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
          <CardDescription>Generate comprehensive financial and regulatory reports</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Reporting features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}