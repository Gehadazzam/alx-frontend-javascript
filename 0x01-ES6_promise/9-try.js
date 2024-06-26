export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push(result);
    queue.push('Guardrail was processed');
  }

  return queue;
}
