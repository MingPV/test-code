export default function Page() {
  async function createInvoice(formData: FormData) {
    "use server";

    console.log(formData);

    const rawFormData = {
      name: formData.get("name"),
    };

    console.log(rawFormData);
  }

  return (
    <>
      <form action={createInvoice}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
