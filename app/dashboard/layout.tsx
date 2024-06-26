import { Metadata } from 'next';
import SideNav from '../ui/dashboard/sidenav';

export const metadata: Metadata = {
  title: {
    template: 'Invoices | %s',
    default: 'Invoices',
  },
};

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto p-6 md:p-12">{children}</div>
    </div>
  );
}
