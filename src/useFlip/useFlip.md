# useFlip

```tsx
const randomKey = () => Math.random().toString(36).substring(7);

const MyComponent = () => {
  const [items, setItems] = useState<string[]>([]);
  const { setRef, remove } = useFlip();

  return (
    <>
      <Button onClick={() => setItems([randomKey(), ...items])}>Add</Button>

      {items.map((name) => (
        <button
          key={name}
          ref={setRef(name)}
          onClick={() => remove(key, () => setItems(items.filter((value) => value !== key)))}
        >
          {name}
        </button>
      ))}
    </>
  );
};
```
