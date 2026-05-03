function Skills() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md mb-5 hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Навички</h2>
      <ul className="grid grid-cols-2 gap-3">
        <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center font-medium">HTML</li>
        <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center font-medium">CSS</li>
        <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center font-medium">React</li>
        <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center font-medium">Git</li>
      </ul>
    </section>
  );
}

export default Skills;