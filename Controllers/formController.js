import Form from "../Models/formModel.js";

export const createForm = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !phone || !service || !budget) {
      res.status(400).json({
        message: "Please fill all required details",
        success: false,
      });
      return;
    }

    const newForm = new Form({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    await newForm.save();
    res.status(201).json({
      success: true,
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error occurred while creating the form",
    });
  }
};

export const getAllFrom = async (req,res) => {
  try {
    const from = await Form.find();
    res.status(201).json(from);
  } catch (error) {
     console.error(error);
    res.status(404).json({ error: "form not found" });
  }
}