import { Spinner } from '@heroui/react';

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted"></span>
      </div>
    );
};

export default loading;