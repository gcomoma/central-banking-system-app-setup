
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Banking Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>Real-time system status and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Dashboard content coming soon...</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest banking transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Transaction list coming soon...</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Alerts & Notifications</CardTitle>
            <CardDescription>System alerts and important notices</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Alerts system coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}