import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {link && (
        <CardContent>
          <Button asChild variant="outline" className="w-full">
            <Link to={link}>Learn More</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  );
}
