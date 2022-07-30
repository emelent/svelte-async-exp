<script>
import { Router, Route, Link } from "svelte-navigator";
import AsyncA from "./AsyncA.svelte";
import AsyncB from "./AsyncB.svelte";
import AsyncC from "./AsyncC.svelte";
import Random from "./Random.svelte";

</script>

<Router>
  <header>
    <nav>
      <Link to="/">A</Link> | 
      <Link to="b">B</Link> |
      <Link to="c">C</Link> |
      <Link to="random">Random</Link>
    </nav>
  </header>

  <main style="border: 1px solid gray; border-radius: 8px; padding: 24px;"> 
    <Route path="random" component={Random} />

    <Route path="/" component={AsyncA} />

    <Route path="b" component={AsyncB} />

    <Route path="c" component={AsyncC} />


    <Route>
      <h3>Default</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router>
