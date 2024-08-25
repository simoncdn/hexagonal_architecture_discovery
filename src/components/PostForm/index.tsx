import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

const FormSchema = z.object({
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(100, {
      message: 'Message must not be longer than 100 characters.',
    }),
});

export default function PostForm() {
  const [charCount, setCharCount] = useState(100);
  const { toast } = useToast();

  const handleCharCount = () => {
    setCharCount((prev) => (prev -= 1));
  };

  const resetCharCount = () => {
    setCharCount(100);
  };

  const displayToast = () => {
    return toast({
      title: 'Message posted',
      description: 'Your message has been posted successfully.',
      variant: 'default',
    });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    form.reset();
    resetCharCount();
    displayToast();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://picsum.photos/200?random=user1" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind ?"
                    className="w-full resize-none"
                    maxLength={100}
                    value={field.value}
                    onChange={(event) => {
                      handleCharCount();
                      field.onChange(event);
                    }}
                    // {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-end gap-4 pr-4">
          <span>{charCount}</span>
          <Button type="submit" variant="default">
            Post message
          </Button>
        </div>
      </form>
    </Form>
  );
}
