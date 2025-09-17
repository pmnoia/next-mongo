import dbConnect from "@/lib/db";
import Product from "@/models/Product";

// Get all products
export async function GET() {
  await dbConnect();
  const products = await Product.find();
  return Response.json(products);
}

// Create a new product
export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const product = new Product(body);
  await product.save();
  return Response.json(product);
}

// Replace a product (PUT)
export async function PUT(request) {
  await dbConnect();
  const body = await request.json();
  const { _id, updateData } = body;
  if (!_id || !updateData) {
    return new Response("_id and updateData required", { status: 400 });
  }
  const product = await Product.findByIdAndUpdate(_id, updateData, { new: true });
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json(product);
}

// Modify a product (PATCH)
export async function PATCH(request) {
  await dbConnect();
  const body = await request.json();
  const { _id, updateData } = body;
  if (!_id || !updateData) {
    return new Response("_id and updateData required", { status: 400 });
  }
  const product = await Product.findByIdAndUpdate(_id, updateData, { new: true });
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json(product);
}