
import Product from "@/models/Product";

// Get a single product by id
export async function GET(request, { params }) {
  const id = params.id;
  const product = await Product.findById(id);
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json(product);
}

// Delete a product by id
export async function DELETE(request, { params }) {
  const id = params.id;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json(product);
}
