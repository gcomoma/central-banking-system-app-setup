
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TransactionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Transaction Processing</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction Management</CardTitle>
          <CardDescription>Process and monitor banking transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Transaction processing features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}