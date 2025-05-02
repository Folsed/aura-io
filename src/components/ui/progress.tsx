'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function Progress({
    className,
    value,
    ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
    return (
        <ProgressPrimitive.Root
            data-slot='progress'
            className={cn('bg-primary/20 relative h-3 w-full rounded-full', className)}
            {...props}
        >
            {value ? (
                <ProgressPrimitive.Indicator
                    data-slot='progress-indicator'
                    className='bg-primary dark:ring-secondary h-3 w-3 flex-1 rounded-full shadow-lg ring-2'
                    style={{ marginLeft: `calc(${value}% - 0.8rem)` }}
                />
            ) : null}
        </ProgressPrimitive.Root>
    )
}

export { Progress }
