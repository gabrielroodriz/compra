import { CircleCheck, CircleDashed } from 'lucide-react-native';
import { FilterStatus } from '../../types/FilterStatus';

// TODO: I'm going to create a design system to exclude fixed tokens
export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (
    <CircleDashed size={18} color="#000" />
  );
}
